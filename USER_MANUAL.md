# User Manual

A reference file to look at if I ever forget specific processes or notes that are important.

## Blogging

Just a couple reminders when blogging.

1. Feel free to use the Note and Quote components in the blogs (Code block is in construction).
2. Always include title, created and (if appropriate) updated fields in frontmatter. Also make sure dates are correct.
3. If leaving an update note, leave the date you put that update note.
4. Notes also have a danger variant as well as a way to change the title/prefix of the Note.
5. Don't use H1 tags unless you really want to emphasize something. The biggest header tags you should use are H2 because H1 is for the blog title.
6. Use <Image></Image> to add images and the src should be the path the image like "/images/blogs/image_name.webp".
7. ALWAYS INCLUDE AN ALT WITH IMAGES IF USED.

### Components

code
use ;; for new line
has to be text="..."
if you want to use " inside do &quot;

note

quote

## Public Folder Organization

Divided into three sections:

1. /favicons
2. /files
3. /images

The only section that is divided further is the /images directory:

1. /blogs
2. /pages
3. /projects
4. ogimage.jpg

The /blogs directory stores all images in blog pages, /pages stores images for general pages like the home page, now page, etc., the /projects directory stores all project card images and the ogimage.jpg is the image used when sharing a link and you see an image on the card. Like when you share a link on facebooks, twitter or discord.

## Dithering Images

Project card images do not need to be dithered because I'd prefer to see the raw content of my projects. Images other than that like normal page images or blog page images do. Why? Because it looks cool. That's it.

Consistency among dithered images would be best. The dither type doesn't have to be exact everytime, just choose one that looks best with the image.

### Dithering Process

1. Go to app.dithermark.com
2. Insert image
3. Look at 'Color Dither' section
4. Choose a dither algorithm (ex. Yliluoma Bayer 2x2)
5. Export image as .webp
