---
layout: post
title: Building my libre.fm profile
published: true
---

My current music subscription service is Deezer; it comes free with my data plan and has uses no data on 4G.
But I always envy everything Spotify offers, its playlists and features are far superior, and it has some bands not available anywhere else.
One feature in particular is "Year in Review", which basically displays a summary of the bands and genres you listened to and the time spent doing it.
I wanted to replicate it, but I had no raw data. So I had to gather it.

Last year, I had set up a IFTTT script that logged my Deezer activity to a Google Docs sheet.
Here is a excerpt of the data:

{::options parse_block_html="true" /}
<div style="overflow-x: auto;">

| Track | Track URL | Album | Album URL | Artist | Artist URL | Date |
| --- | --- | --- | --- | --- | --- |
| At Dawn's First Light | http://www.deezer.com/track/120923668 | At Dawn's First Light | http://www.deezer.com/album/12626808 | Amon Amarth | http://www.deezer.com/artist/6065 | October 24, 2017 at 10:11PM |
| Cry Of The Black Birds | http://www.deezer.com/track/70877948 | With Oden On Our Side | http://www.deezer.com/album/6958493 | Amon Amarth | http://www.deezer.com/artist/6065 | October 24, 2017 at 10:12PM |
| The Way of Vikings | http://www.deezer.com/track/121588488 | Jomsviking | http://www.deezer.com/album/12707128 | Amon Amarth | http://www.deezer.com/artist/6065 | October 24, 2017 at 10:13PM |
| Raise Your Horns | http://www.deezer.com/track/121588486 | Jomsviking | http://www.deezer.com/album/12707128 | Amon Amarth | http://www.deezer.com/artist/6065 | October 24, 2017 at 10:16PM |
| First Kill | http://www.deezer.com/track/117953668 | First Kill | http://www.deezer.com/album/12250896 | Amon Amarth | http://www.deezer.com/artist/6065 | October 24, 2017 at 10:19PM |

</div>

Using Sublime Text 3, I converted all the rows in the format used in [this script](https://gitorious.org/fmthings/lasttolibre/?p=fmthings:lasttolibre.git;a=blob;f=libreimport.py;h=5b67a8b9fc1dc9b7cb7c772fbf00adec03361435;hb=HEAD#l49).
Note that the data must be separated by tabs. Also, the MBIDs don't have to be necessarily valid, so I filled them with a single whitespace character.

The dates must be converted to timestamps. To achieve this, I used this tool: <http://unixtimestamp.50x.eu>.

I chose <libre.fm> because of the open-source aspect. They have some tools, and I used the Commandline tools available at <https://git.gnu.io/foocorp/librefm/wikis/LastToLibre>.
Specifically, the `libreimport.py` script. I also used it to import my Last.fm data, extracted using `lastexport.py`.

After I finished importing the Google Docs data, I felt that something was missing.
I first started using music subscription services back in 2013-14 (Spotify), and none of that was available.
I searched if there was a way to gather my listening history on Spotify itself, but reached nothing (only cache data, not useful).
So I went to Facebook, and thankfully, they had what I believe is most of my listening history recorded (yay espionage) when I signed up using my Facebook account.
This is avaliable here: <https://www.facebook.com/me/allactivity?privacy_source=activity_log&log_filter=app_174829003346>.
Then I wondered if they also had the data for Deezer, [which they do](https://www.facebook.com/me/allactivity?privacy_source=activity_log&log_filter=app_241284008322). But I left it for later.

I scrolled all the way to 2012, and then opened the Chrome Developer Tools.
I copied the specific `div` that contained all of the data, fixed it with [this NPM package](https://www.npmjs.com/package/pretty), and filtered and formatted it using my [mad skillz](https://www.urbandictionary.com/define.php?term=mad+skillz) on Sublime Text regex.
I also imported all this data using the `libreimport.py` script.

Finally, I have a service with all of my listening history data, available at <https://libre.fm/user/gervasiocaj/stats>.
Now I will bother some friends for ideas on how to improve the libre.fm statistics.
