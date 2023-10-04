const fs = require('fs')
const path = __dirname+"/index.html"
const code = `<!DOCTYPE html>
<html>
<head>
    <title>Beautiful Website</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f0f0f0; text-align: center;">

    <header style="background-color: #333; color: #fff; padding: 20px;">
        <h1>Welcome to My Beautiful Website</h1>
        <p>Where Beauty Meets Functionality</p>
    </header>

    <nav style="background-color: #444; color: #fff; padding: 10px;">
        <ul style="list-style: none; padding: 0;">
            <li style="display: inline; margin-right: 20px;"><a href="#">Home</a></li>
            <li style="display: inline; margin-right: 20px;"><a href="#">About</a></li>
            <li style="display: inline; margin-right: 20px;"><a href="#">Services</a></li>
            <li style="display: inline;"><a href="#">Contact</a></li>
        </ul>
    </nav>

    <main style="padding: 20px;">
        <h2>About Us</h2>
        <p>We are dedicated to creating beautiful and functional websites.</p>

        <h2>Our Services</h2>
        <ul>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Graphic Design</li>
        </ul>
    </main>

    <footer style="background-color: #333; color: #fff; padding: 10px;">
        &copy; 2023 Beautiful Website. All Rights Reserved.
    </footer>

</body>
</html>`
try{
    fs.writeFileSync(path,code)
}catch(err){
    console.log("Error Occured", err)
}