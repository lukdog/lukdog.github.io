import {Icon} from '../../types/global'
const icons = require("./TechIcons.json")

export default function TechIconLoader(name: string) {

    if (icons[name]) {
        return <Icon>{
            name: name,
            lightUrl: icons[name].light,
            darkUrl: icons[name].dark
        }
    }
}