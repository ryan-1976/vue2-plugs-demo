export function MP(ak) {
    return new Promise(function (resolve, reject) {
        window.onBMapCallback = function () {
            console.log(BMap);
            resolve(BMap)
        }
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://api.map.baidu.com/api?v=2.0&ak=" + ak + "&callback=onBMapCallback";
        script.onerror = reject;
        document.head.appendChild(script);
    })
}
