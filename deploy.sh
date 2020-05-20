echo "Checking out master"
git checkout master

echo "Building..."
npm run build

echo "Deploying files to server..."
rsync -avP build/ root@173.255.206.135:/var/www/bensullivan.dev/