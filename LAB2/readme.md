# FIle System (FS MODULE)
- FS module directly communicate with operating system rather than browser

- The common operation on a file or folder are:- 
1. File -> writeFile, ReadFile, AppendFile .  
2. Folder -> mkdir/md, rmdir/rm, reddir .
3. File Stat -> stat, lstat, rstat
4. Watch -> watch, unwatch .
5. Stream -> readStream(), writeStream() .
6.All function are promised it must be called by await keyword.