import { UserRoundPlus, ArrowRight } from "lucide-react";

interface InviteGuestsStepProps{
    openGuestsModal: () => void
    emailsToInvite: string[]
    openConfirmeTripModal: () => void

}

export function InviteGuestsStep({openGuestsModal, openConfirmeTripModal, emailsToInvite}: InviteGuestsStepProps ){
    return(
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

        <div className='flex items-center gap-2 flex-1'>
          <button type='button' onClick={openGuestsModal} className='flex items-center gap-2 flex-1 text-left'>
          <UserRoundPlus className='size-5 text-zinc-400'/>
          
          {emailsToInvite.length > 0 ? (
            <span className='text-zinc-400 text-lg flex'>{emailsToInvite.length} pessoas convidadas</span>
          ):(
            <span className='text-zinc-400 text-lg flex'>Quem estará na viagem?</span>
          )}
          
          </button>
        </div>

        <div className='w-px h-6 bg-zinc-800'></div>

        <button onClick={openConfirmeTripModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>Confirmar Viagem
          <ArrowRight className='size-5 text-lime-950'/>
        </button>
      </div>

    )
}