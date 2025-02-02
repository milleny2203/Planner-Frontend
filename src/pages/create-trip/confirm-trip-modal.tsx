import { Mail, User, X } from "lucide-react"
import { FormEvent } from "react"

interface ConfirmTripModalProps{
    closeConfirmTripModal: () => void
    createTrip: (event: FormEvent<HTMLFormElement>) => void

}

export function ConfirmTripModal({closeConfirmTripModal, createTrip}: ConfirmTripModalProps){
    return(
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
        
        <div className='w-[640px] rounded-xl px-6 py-5 shadow-shape bg-zinc-900 space-y-5'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Confirmar criação da viagem</h2>
          <button>
            <X className='size-5 text-zinc-400' onClick={closeConfirmTripModal}/>
          </button>
          </div>
          <p className='text-zinc-400 text-sm mt-2 mb-5'>Para concluir a criação da viagem para   <span className='font-semibold text-zinc-100'>Florianópolis, Brasil</span> nas datas de <span className='font-semibold text-zinc-100'>16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:</p>

         

          <form onSubmit={createTrip} className='space-y-3'>

            <div className='h-14 px-4 bg-zinc-950 border border-l-zinc-800 rounded-lg flex items-center gap-2'>

              <User className='text-zinc-400 size-5' />
              <input name='name' placeholder="Digite o seu nome completo" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />

            </div>

            <div className='h-14 px-4 bg-zinc-950 border border-l-zinc-800 rounded-lg flex items-center gap-2'>

              <Mail className='text-zinc-400 size-5' />
              <input type="email" name='email' placeholder="Digite o seu e-mail pessoal" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />

            </div>

            <button type='submit' className='bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400 w-full justify-center'>Confirmar criação da viagem
              
            </button>

          </form>

        </div>
 
      </div>
    )
}