#!/bin/bash

# db
echo 'var db = [' > db.js

sed -r -n "
2,$ {
  s/^([0-9]+-[0-9]+-[0-9]+),([0-9]+,)([0-9]+,)([0-9]+,)(.+)/  [new Date('\1'), \3 \4],/g p
}
" db.csv >> db.js

echo ']' >> db.js


# ventilator
echo 'var ventilator = [' >> db.js

awk -F , 'NR > 1 && NR < 50 {printf("  [%s, \"%s\", %s, %s, %s, %s, %s],\n", $1,$2,$3,$4,$5,$15,$19)}' \
 ventilator.csv >> db.js

echo ']' >> db.js
cat << end >> db.js
ventilator.forEach(e => {
  e.push(Math.round(e[6]/e[5]*100))
  e.push(Math.round(e[6]/e[4]*100))
  e.push(Math.round(e[6]/(e[3]+e[4])*100))
})
end

# 最新URL
url=$( tail -2 db.csv | grep '^202' | tail -1 | cut -f 5 -d,)
echo "var url = '$url'" >> db.js

