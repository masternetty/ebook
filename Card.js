
import { useState } from 'react';

export function Card() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-green-700 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition">
      <h2 className="text-2xl font-semibold mb-4">Esboços Bíblicos Volume 2</h2>
      <div className="flex flex-col gap-4">
        <button onClick={() => setShowModal(true)} className="bg-black text-green-400 px-4 py-2 rounded-xl hover:bg-green-900 transition">Ver mais</button>
        <a href="#" className="bg-green-900 text-white px-4 py-2 rounded-xl text-center hover:bg-green-700 transition">Comprar agora</a>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white text-black p-8 rounded-2xl max-w-md w-full relative">
            <h3 className="text-2xl font-bold mb-4">Esboços Bíblicos Volume 2</h3>
            <p className="mb-4">Guia de esboços de Gênesis a Apocalipse. Inspiração para pregadores e estudiosos da Bíblia.</p>
            <video src="/videos/esbocos-volume2.mp4" controls className="w-full rounded-xl mb-4" />
            <button onClick={() => setShowModal(false)} className="absolute top-2 right-2 bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center">X</button>
          </div>
        </div>
      )}
    </div>
  );
}
