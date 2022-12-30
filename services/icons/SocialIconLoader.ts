import {Icon} from '../../types/global'
const icons = require("./SocialsIcons.json")

export default function SocialIconLoader(name: string) {

    if (icons[name]) {
        return <Icon>{
            name: name,
            lightUrl: icons[name].light,
            darkUrl: icons[name].dark
        }
    }
}