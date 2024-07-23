import { CircleDashed, UserCog } from "lucide-react";
import { InviteGuestsModal } from "../create-trip/invite-guests-modal";
import { FormEvent, useState } from "react";
import { ConfirmGuestsModal } from "./confirm-guests-modal";
//import { ParticipantsType } from "../../types/participants-type";
//import { getParticipants } from "../../services/participantsService";

export function Guests() {
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [emailsToInvite, setemailsToInvite] = useState<string[]>([
    "HqT7v@example.com",
  ]);
  const [isConfirmGuestsModalOpen, setIsConfirmGuestsModalOpen] =
    useState(false);

  {
    /*useEffect(() => {
    const fetchParticipants = async () => {
      const data = await getParticipants();
      setemailsToInvite(data);
    };

    fetchParticipants();
  }, []);*/
  }

  function openConfirmGuestsModal() {
    setIsConfirmGuestsModalOpen(true);
  }

  function closeConfirmGuestsModal() {
    setIsConfirmGuestsModalOpen(false);
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false);
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }

    if (emailsToInvite.includes(email)) {
      return;
    }

    setemailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }

  function removeEmailToInvite(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (email) => email !== emailToRemove
    );

    setemailsToInvite(newEmailList);
  }

  return (
    <div>
      <div className="space-y-6">
        <h2 className="font-semibold text-xl"> Convidados </h2>
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100 text-sm">
                Jessica White
              </span>
              <span className="block text-xs text-zinc-400 truncate ">
                jessica.white44@yahoo.com
              </span>
            </div>
            <CircleDashed className="text-zinc-400 size-5 shrink-0" />
          </div>
        </div>
        <button
          onClick={openGuestsModal}
          className="bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700 w-full justify-center"
        >
          <UserCog className="size-5 text-zinc-200" />
          Gerenciar Convidados
        </button>
        <button
          onClick={openConfirmGuestsModal}
          className="bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700 w-full justify-center"
        >
          <UserCog className="size-5 text-zinc-200" />
          Confirmar Presença
        </button>
      </div>

      {isConfirmGuestsModalOpen && (
        <ConfirmGuestsModal closeConfirmGuestsModal={closeConfirmGuestsModal} />
      )}

      {isGuestsModalOpen && (
        <InviteGuestsModal
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          emailsToInvite={emailsToInvite}
          removeEmailToInvite={removeEmailToInvite}
        />
      )}
    </div>
  );
}
