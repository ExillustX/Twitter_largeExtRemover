# twitter_largeExtRemover

Saving a Twitter image results in "_large" file extension and this can cause many issues when opening/reuploading the image. This tool iterates over files in the given directory to remove "_large" from each file name.

# Get started
Clone this repository:
```
git clone git@github.com:ExillustX/twitter_largeExtRemover.git
```

Change the current working directory to this repository:
```
cd twitter_largeExtRemover
```

Install the required dependencies:
```
npm install
```

Start the tool:
```
node index.js directory/path
```

You can also skip the confirmation prompt by passing the ``--destructive`` flag:
```
node index.js directory/path --destructive
```

Make sure to change ``directory/path`` with the directory path you want.
