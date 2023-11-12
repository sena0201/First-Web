import styles from "./Sidebar.module.scss"
import classNames from "classnames/bind";
import { AiFillHome } from "react-icons/ai"
import { HiOutlineUsers, HiOutlineVideoCamera } from "react-icons/hi"

const cx = classNames.bind(styles)

function Sidebar() {
    return <aside className={cx('wrapper')}>
        <nav className={cx('navbar')}>
            <div className={cx('home')}>
                <a href="/">
                    <AiFillHome className={cx('icon')} />
                    <p>Dành cho bạn</p>
                </a>
            </div>
            <div className={cx('follow')}>
                <a href="/following">
                    <HiOutlineUsers className={cx('icon')} />
                    <p>Đang Follow</p>
                </a>
            </div>
            <div className={cx('live')}>
                <a href="/">
                    <HiOutlineVideoCamera className={cx('icon')} />
                    <p>LIVE</p>
                </a>
            </div>
        </nav>

        <div>
            <p>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
            <button>Đăng nhập</button>
        </div>
    </aside>
}

export default Sidebar;