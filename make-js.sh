#!/bin/bash

echo 'var db = [' > db.js

sed -r -n "
2,$ {
  s/^([0-9]+-[0-9]+-[0-9]+),([0-9]+,)([0-9]+,)([0-9]+,)(.+)/  [new Date('\1'), \2 \3 \4],/g p
}
" db.csv >> db.js

echo ']' >> db.js

# 最新URL
url=$( tail -2 db.csv | grep '^202' | tail -1 | cut -f 5 -d,)
echo "var url = '$url'" >> db.js

