# Get start datetime:
start_time=`date +%s`

# Display message on deploy:
echo $'\n==> Start deleting script ...'

# change directory to udagram-api/:
cd ../

# Delete RDS instance:
echo $'==> Deleting RDS instance ... This may take a while.\n'
aws rds delete-db-instance --db-instance-identifier udagram --skip-final-snapshot

# Wait until RDS instance is stopped:
echo $'\n==> Waiting for RDS instance to be deleted ... This may take a while.'
aws rds wait db-instance-deleted --db-instance-identifier udagram

# Play a beep sound after finising:
echo "==> Finished deleting script ..."
echo -en '\007'

# Get end datetime:
end_time=`date +%s`

# Calculate runtime:
echo "==> Execution runtime was `expr $end_time - $start_time` s."

# Wait for any key to be pressed:
read -p "==> Press any key to close the terminal ... " -n1 -s