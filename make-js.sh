#!/bin/bash

echo 'var db = [' > db.js

sed -r -n "
2,$ {
  s/^([0-9]+-[0-9]+-[0-9]+),([0-9]+,)([0-9]+,)([0-9]+,)(.+)/  [new Date('\1 12:00'), \2 \3 \4],/g p
}
" db.csv >> db.js

echo ']' >> db.js

