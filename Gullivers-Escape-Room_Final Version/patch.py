from pathlib import Path
p=Path('/tmp/fixfinal/index.html')
s=p.read_text(encoding='utf-8')
s=s.replace('''                <div class="map-skyline"></div>\n                <div class="map-route route-1"></div>\n                <div class="map-route route-2"></div>\n                <div class="map-route route-3"></div>\n                <div class="map-route route-4"></div>\n\n                <div class="map-compass" aria-hidden="true"><span></span></div>\n                <div class="map-ship-art" aria-hidden="true"><i></i><b></b><em></em></div>''','''                <div class="map-skyline"></div>\n                <div class="map-journey-line" aria-hidden="true"></div>\n                <div class="map-compass" aria-hidden="true"><span></span></div>\n                <div class="map-ship-art" aria-hidden="true"><i></i><b></b><em></em></div>''')
p.write_text(s,encoding='utf-8')

css=Path('/tmp/fixfinal/style.css')
c=css.read_text(encoding='utf-8')
# Append a final override block so earlier conflicting map/cover rules cannot win.
c += r'''

/* =========================================================
   FINAL FINAL FIX — COVER BUTTON + CLEAN CONTINUOUS MAP PATH
   ========================================================= */

/* COVER: button is centered horizontally and placed BELOW the title area. */
#cover-screen .cover-background{
    position:relative !important;
    width:min(1450px,98vw) !important;
    margin:0 auto !important;
    overflow:hidden !important;
}
#cover-screen .cover-image{
    display:block !important;
    width:100% !important;
    height:auto !important;
    max-height:92vh !important;
    object-fit:contain !important;
    margin:0 auto !important;
}
#cover-screen .cover-content.cover-only-button{
    position:absolute !important;
    inset:0 !important;
    width:100% !important;
    height:100% !important;
    padding:0 !important;
    margin:0 !important;
    display:block !important;
    pointer-events:none !important;
}
#cover-screen .cover-start-button{
    position:absolute !important;
    left:50% !important;
    top:58% !important;
    bottom:auto !important;
    margin:0 !important;
    transform:translate(-50%,-50%) !important;
    z-index:100 !important;
    min-width:220px !important;
    padding:18px 48px !important;
}
#cover-screen .cover-start-button:hover{
    transform:translate(-50%,-54%) scale(1.05) !important;
}

/* MAP: four cards have their own spaces. One continuous line connects them. */
.adventure-map.final-adventure-map{
    position:relative !important;
    min-height:560px !important;
    height:560px !important;
    max-height:none !important;
    padding:0 3% !important;
    overflow:hidden !important;
}
.adventure-map.final-adventure-map .map-journey-line{
    position:absolute !important;
    z-index:1 !important;
    left:8% !important;
    right:8% !important;
    top:50% !important;
    height:8px !important;
    transform:translateY(-50%) !important;
    border:0 !important;
    border-radius:999px !important;
    background:repeating-linear-gradient(
        90deg,
        #ffe77a 0 22px,
        rgba(255,255,255,.72) 22px 34px
    ) !important;
    box-shadow:0 4px 10px rgba(0,50,75,.18),0 0 0 3px rgba(255,255,255,.16) !important;
    pointer-events:none !important;
}
.adventure-map.final-adventure-map .map-journey-line::before,
.adventure-map.final-adventure-map .map-journey-line::after{
    content:"";
    position:absolute;
    top:50%;
    width:24px;
    height:24px;
    border-radius:50%;
    background:#fff8bd;
    border:5px solid #f2c957;
    transform:translateY(-50%);
    box-shadow:0 4px 10px rgba(0,0,0,.15);
}
.adventure-map.final-adventure-map .map-journey-line::before{left:-5px}
.adventure-map.final-adventure-map .map-journey-line::after{right:-5px}

.adventure-map.final-adventure-map .voyage-card{
    position:absolute !important;
    z-index:10 !important;
    top:50% !important;
    bottom:auto !important;
    left:auto !important;
    right:auto !important;
    transform:translateY(-50%) !important;
    width:22% !important;
    max-width:270px !important;
    min-width:210px !important;
    height:310px !important;
    min-height:310px !important;
    display:grid !important;
    grid-template-rows:205px 105px !important;
    border-radius:26px !important;
    border:4px solid rgba(255,255,255,.96) !important;
    box-shadow:0 14px 30px rgba(0,31,58,.28) !important;
}
.adventure-map.final-adventure-map #voyage-1{left:4% !important}
.adventure-map.final-adventure-map #voyage-2{left:28% !important}
.adventure-map.final-adventure-map #voyage-3{left:52% !important}
.adventure-map.final-adventure-map #voyage-4{right:4% !important}
.adventure-map.final-adventure-map .voyage-card:hover:not(.locked){
    transform:translateY(calc(-50% - 7px)) scale(1.02) !important;
}
.adventure-map.final-adventure-map .voyage-art{height:auto !important;min-height:0 !important}
.adventure-map.final-adventure-map .voyage-copy{height:auto !important;min-height:0 !important}

/* Small numbered route markers sit on the line, never on the text. */
.adventure-map.final-adventure-map #voyage-1::after,
.adventure-map.final-adventure-map #voyage-2::after,
.adventure-map.final-adventure-map #voyage-3::after,
.adventure-map.final-adventure-map #voyage-4::after{
    content:"" !important;
    position:absolute !important;
    width:20px !important;
    height:20px !important;
    border-radius:50% !important;
    left:50% !important;
    bottom:-17px !important;
    top:auto !important;
    right:auto !important;
    transform:translateX(-50%) !important;
    background:#fff8bd !important;
    border:4px solid #f2c957 !important;
    z-index:20 !important;
}

/* Decorative map objects stay around the outside of the cards. */
.adventure-map.final-adventure-map .map-fish{left:1.5% !important;top:7% !important}
.adventure-map.final-adventure-map .map-cloud-object{left:44% !important;top:3% !important}
.adventure-map.final-adventure-map .map-shell-object{left:1.5% !important;bottom:4% !important}
.adventure-map.final-adventure-map .map-bubble-object{right:1.5% !important;top:7% !important}
.adventure-map.final-adventure-map .map-horse-object{right:1.5% !important;bottom:4% !important}
.adventure-map.final-adventure-map .map-tiny-object{left:44% !important;bottom:3% !important}

@media (max-width:1100px){
    .adventure-map.final-adventure-map{height:760px !important;min-height:760px !important;padding:0 !important}
    .adventure-map.final-adventure-map .map-journey-line{
        left:50% !important;right:auto !important;top:8% !important;bottom:8% !important;
        width:8px !important;height:auto !important;transform:translateX(-50%) !important;
        background:repeating-linear-gradient(180deg,#ffe77a 0 22px,rgba(255,255,255,.72) 22px 34px) !important;
    }
    .adventure-map.final-adventure-map .map-journey-line::before{top:-5px;left:50%;transform:translate(-50%,0)}
    .adventure-map.final-adventure-map .map-journey-line::after{top:auto;bottom:-5px;right:auto;left:50%;transform:translate(-50%,0)}
    .adventure-map.final-adventure-map .voyage-card{width:40% !important;max-width:310px !important;min-width:0 !important;height:300px !important;min-height:300px !important;grid-template-rows:195px 105px !important}
    .adventure-map.final-adventure-map #voyage-1{left:5% !important;top:14% !important;transform:translateY(-50%) !important}
    .adventure-map.final-adventure-map #voyage-2{right:5% !important;left:auto !important;top:38% !important;transform:translateY(-50%) !important}
    .adventure-map.final-adventure-map #voyage-3{left:5% !important;top:62% !important;transform:translateY(-50%) !important}
    .adventure-map.final-adventure-map #voyage-4{right:5% !important;left:auto !important;top:86% !important;transform:translateY(-50%) !important}
}
@media (max-width:700px){
    #cover-screen .cover-start-button{top:58% !important;min-width:180px !important;padding:14px 34px !important;font-size:20px !important}
    .adventure-map.final-adventure-map{height:980px !important;min-height:980px !important}
    .adventure-map.final-adventure-map .voyage-card{width:min(76vw,330px) !important;height:200px !important;min-height:200px !important;grid-template-rows:120px 80px !important}
    .adventure-map.final-adventure-map #voyage-1{left:50% !important;right:auto !important;top:12% !important;transform:translate(-50%,-50%) !important}
    .adventure-map.final-adventure-map #voyage-2{left:50% !important;right:auto !important;top:36% !important;transform:translate(-50%,-50%) !important}
    .adventure-map.final-adventure-map #voyage-3{left:50% !important;right:auto !important;top:60% !important;transform:translate(-50%,-50%) !important}
    .adventure-map.final-adventure-map #voyage-4{left:50% !important;right:auto !important;top:84% !important;transform:translate(-50%,-50%) !important}
    .adventure-map.final-adventure-map .map-interactive{display:none !important}
}
'''
css.write_text(c,encoding='utf-8')
