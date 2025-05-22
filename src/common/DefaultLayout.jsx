import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import './index.css'
import css from './defaultlayout.module.css'
import { TokenChecker } from './TokenChecker' // 토큰 체커 컴포넌트 import

export const DefaultLayout = () => {
  return (
    <div className={css.defaultlayout}>
      <Header />
      <Outlet />
      <footer></footer>
    </div>
  )
}
