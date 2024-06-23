import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <svg className="w-16 h-16 fill-current text-purple-600" viewBox="0 0 68 68" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32" id="vr-technology"><path d="M67,4.5c0-0.3-0.1-0.6-0.4-0.8c-0.3-0.2-0.6-0.3-0.9-0.2c-21.4,6-42.6,5.5-63.5,0C2,3.5,1.6,3.5,1.4,3.7
		C1.1,3.9,1,4.2,1,4.5c0,7.7,0,44.2,0,52c0,0.7,0.6,1.1,1.3,1c5.6-1.7,11.2-2.9,16.6-3.7v9.7c0,0.6,0.4,1,1,1h27.4c0.6,0,1-0.4,1-1
		V53.4C63.7,55.5,67,59.2,67,56.5C67,45.5,67,15.3,67,4.5z M42.2,45.7H25c-3.3,0-6,2.7-6.1,6c-1.4,0.2-2.8,0.4-4.2,0.7
		c0-12.4,0-21.7,0-33.9c13.4,3,26.9,2.9,38.6,0.2c0,12,0,21.4,0,33.5c-1.7-0.3-3.4-0.6-5-0.8C48,48.2,45.4,45.7,42.2,45.7z M3,36.5
		v-9.6c1.8,0.7,5.1,1.9,9.7,3v9.7C10.7,39,7.1,38.1,3,36.5z M26.2,18.3c-3.9-0.4-7.8-1-11.5-1.9V8.2c3.9,0.6,7.8,1.1,11.5,1.3V18.3z
		 M12.7,27.8c-5-1.3-8.4-2.6-9.7-3.1V15c1.8,0.7,5.1,1.9,9.7,3V27.8z M65,24.7c-3.1,1.3-6.4,2.4-9.7,3.3v-9.7
		c3.3-0.8,6.6-1.9,9.7-3.2V24.7z M53.3,16.6c-3.7,0.9-7.6,1.5-11.5,1.8V9.6c3.8-0.2,7.7-0.7,11.5-1.3V16.6z M55.3,30
		c3.3-0.8,6.6-1.9,9.7-3.2v9.6c-3.1,1.3-6.4,2.4-9.7,3.3V30z M65,12.9c-3.1,1.3-6.4,2.4-9.7,3.3V8c3.3-0.6,6.5-1.3,9.7-2.2V12.9z
		 M39.8,9.7v8.9c-3.8,0.2-7.3,0.2-11.5-0.1V9.7C32.1,9.9,36,9.9,39.8,9.7z M12.7,7.9V16c-5-1.3-8.4-2.6-9.7-3.1V5.8
		C6.2,6.6,9.5,7.3,12.7,7.9z M3,38.6c3.1,1.2,6.5,2.2,9.7,3v11.2c-3.2,0.7-6.5,1.4-9.7,2.4V38.6z M46.3,62.5h-5.7v-4
		c0-0.6-0.4-1-1-1s-1,0.4-1,1v4H28.6v-4c0-0.6-0.4-1-1-1s-1,0.4-1,1v4h-5.7c0-1.6,0-8.1,0-10.6c0-2.3,1.8-4.2,4.1-4.2h17.2
		c2.3,0,4.1,1.9,4.1,4.2C46.3,54.4,46.3,59.7,46.3,62.5z M55.3,52.6V41.8c3.3-0.8,6.6-1.9,9.7-3.2v16.6
		C61.8,54.1,58.5,53.3,55.3,52.6z"></path><path d="M41.5,27.7C40,24.9,37,23,33.8,23c-3.2,0-6.2,1.8-7.7,4.7c-1.1,0-2.1,0.5-2.9,1.2c-0.8,0.8-1.2,1.9-1.2,3
		c0,2.2,1.7,4.1,3.9,4.2c1.5,3.1,4.5,5.1,8,5.1c3.4,0,6.5-2,8-5.2c0.9-0.1,1.7-0.5,2.3-1.2c0.8-0.8,1.2-1.9,1.2-3
		C45.3,29.7,43.6,28,41.5,27.7z M33.8,25c2.1,0,4.1,1,5.4,2.7H28.4C29.7,26,31.7,25,33.8,25z M33.8,39.3c-2.3,0-4.4-1.2-5.7-3.1
		h11.4C38.2,38.1,36.1,39.3,33.8,39.3z M42.6,33.5c-0.4,0.4-0.9,0.6-1.5,0.6h0H26.5h-0.4c-1.2,0-2.1-1-2.1-2.2
		c0-0.6,0.2-1.2,0.6-1.6c0.4-0.4,0.9-0.6,1.5-0.6h0.5h14.3c0,0,0,0,0,0h0.2c1.2,0,2.1,1,2.1,2.2C43.3,32.5,43,33.1,42.6,33.5z"></path></svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
