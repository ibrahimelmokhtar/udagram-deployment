# Get start datetime:
start_time=`date +%s`

# Display message on deploy:
echo $'\n==> Start deleting script ...'

# change directory to udagram-frontend/:
cd ../

# Empty bucket:
echo $'==> Emptying bucket ... This may take a while.\n'
aws s3 rm --recursive s3://mokhtar-udagram-bucket

# Delete bucket:
echo $'\n==> Deleting bucket ...'
aws s3api delete-bucket --bucket mokhtar-udagram-bucket

# Play a beep sound after finising:
echo $'\n==> Finished deleting script ...'
echo -en '\007'

# Get end datetime:
end_time=`date +%s`

# Calculate runtime:
echo "==> Execution runtime was `expr $end_time - $start_time` s."

# Wait for any key to be pressed:
read -p "==> Press any key to close the terminal ... " -n1 -s
