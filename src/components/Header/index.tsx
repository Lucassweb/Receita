import Logo from '../../assets/img/logo_tudogostoso.png'
import { Topbar, HeaderTop } from './style'

export const Header = () => {
    return (
        <div>
            <Topbar>
                <img src={Logo} alt='logo' />
            </Topbar>
            <HeaderTop/>
        </div>
    )
}