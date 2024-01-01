import Image from 'next/image'
import { Header } from './components/Header'
import {Metadata} from 'next'

export const metadata:Metadata = {
  title:'Hongyu Zhu'
}

export default function Home() {
  return (
    <>
    <div>
      <Header />
    </div>
    
    </>
    
  )
}
