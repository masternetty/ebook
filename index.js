
import Head from 'next/head'
import { Card } from '../components/Card'
import { CommentSection } from '../components/CommentSection'
import { WhatsAppButton } from '../components/WhatsAppButton'

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-green-500">
      <Head>
        <title>Venda de eBooks - Spurgeon</title>
      </Head>
      <main className="p-8">
        <h1 className="text-4xl font-bold text-center mb-10">Conheça nossos eBooks</h1>
        <div className="flex flex-wrap justify-center gap-10">
          <Card />
        </div>
        <CommentSection />
        <WhatsAppButton />
      </main>
    </div>
  )
}
