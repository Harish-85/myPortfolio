export default class ProjectData {
    id: string;
    name: string;
    description: string;
    htmlDescription: string;
    iconUrl: string; // used as thumnail
    isWide: boolean; // thumbnail will take 2 cols in the grid view
    isHigh: boolean; // thumbnail will take 2 rows in the grid view
    accentColor: string; // color of title bar
    engineIcon: string; // icon of the engine used
    width: number;
    height: number;
    constructor(id: string, name: string,description: string, iconUrl: string, html: string, accentColor = "#000000", isHigh = false, isWide = false, engineIcon = "img/unitylogo.png", width = 20, height = 20) {
        this.id = id;
        this.name = name;
        this.htmlDescription = html;
        this.iconUrl = iconUrl;
        this.isHigh = isHigh;
        this.isWide = isWide;
        this.accentColor = "#000000";
        this.engineIcon = engineIcon;
        this.width = width;
        this.height = height;
        this.description = description;
    }
}
