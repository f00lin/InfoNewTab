
// left column apps
var gmail = "pjkljhegncpnkpknbcohdijeoejaedia";
var youtube = "blpcfgokakmgnkcojhhkbfbldkacnbeo";
var plus = "dlppkpafhbajpcmmoheippocdidnckmm";
var maps = "lneaknkopdijkpnocmklfnjbeapigfbh";
var calendar = "ejjicmeblgpmajnghnpcppodonldlgfn";
var keep = "hmjkmjkepdijhoojdojkdfohbdgmmhki";

var apps_left_column = [gmail, youtube, plus, maps, calendar, keep];


// right column apps
var drive = "apdfllckaahabafndbhieahigkjlhalf";
var box = "ejnkaeblpdcamcioiiabclakabcbjmbl";
var dropbox = "ioekoebejdcmnlefjiknokhhafglcjdl";
var copy = "hbnfjepmmdaffchnmflojodpmlhlpcnd";
var mega = "kpgogfgfingilcbkpahnggpfdabapnol";
var tonido = "mcjokjhhpigcodfhaebkfhobepijnlcl";


var hype_machine = "lgamnplmeomlmobikbfjlbfiebabcfpp";
var earbits = "mgkjffcdjblaipglnmhanakilfbniihj";
var tunein = "lmddhpgpemkfloldllmhpfmikonbkcpe";
var iplayer_radio = "jelkdaejegcppcjbapnakfhlaocnkpeg";
var spotify = "cnkjkdjlofllcpbemipjbcpfnglbgieh";
var soundcloud = "ipebkipbeggmmkjjljenoblnfaenambp";

var apps_right_column = [drive, box, dropbox, copy, mega, tonido];





var addApps = function(apps_list) {
    
    // select which column to fill
    if(apps_list === apps_left_column) {
        var apps_column = document.getElementById("app_column_left");
        }
    if(apps_list === apps_right_column) {
        var apps_column = document.getElementById("app_column_right");
        }
    
    // get info for each app in list            
    for(a in apps_list) {
        var app_id = apps_list[a];
        chrome.management.get(app_id, function(a) {
            
            if(a.isApp && a.enabled) {
            
                // create app column entry    
                var app = document.createElement("div");
                
                // get app icon and enable click to launch
                var img = new Image();
                img.className = "app_icon";
                img.src = find128Image(a.icons);
                img.addEventListener("click", (function(ext) {
                  return function() {
                    chrome.management.launchApp(ext.id);
                  };
                })(a));
                
                // get app name 
                var name = document.createElement("div");
                name.className = "name";
                name.textContent = a.name;
                
                // insert app, icon and name 
                app.className = "app";
                app.appendChild(img);
                //app.appendChild(name);  //uncomment to show app names
                apps_column.appendChild(app);
            }
        })
    }
};
                // get the 128px icon
                var find128Image = function(icons) {
                    for(var icon in icons) {
                        if(icons[icon].size == "128") {
                            return icons[icon].url;
                        }
                    }
                    // if no icon found 
                    return "/noicon.png";
                }; 
            
            

// populate both columns on page load
document.addEventListener('DOMContentLoaded', function () { 
    addApps(apps_left_column), addApps(apps_right_column);
}, false)




