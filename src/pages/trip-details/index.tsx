import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationDateAlter } from "./destination-date-alter";
import { MapPin, Calendar, Settings2 } from "lucide-react";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  const [isAlterDestinationDateOpen, setIsAlterDestinationDateOpen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  function openAlterDestinationDate() {
    setIsAlterDestinationDateOpen(true);
  }

  function closeAlterDestinationDate() {
    setIsAlterDestinationDateOpen(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-zinc-100">Florianópolis, Brasil</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100">17 a 23 de Agosto</span>
          </div>
          <div className="w-px h-6 bg-zinc-800"></div>
          <button
            onClick={openAlterDestinationDate}
            className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
          >
            Alterar local/data
            <Settings2 className="size-5 text-zinc-200" />
          </button>
        </div>
      </div>
      <main className="flex gap-16 px-4">
        <Activities openCreateActivityModal={openCreateActivityModal} />
        <div className="w-80 space-y-6">
          <ImportantLinks />

          <div className="w-full h-px bg-zinc-800"></div>

          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}

      {isAlterDestinationDateOpen && (
        <DestinationDateAlter
          closeAlterDestinationDate={closeAlterDestinationDate}
        />
      )}
    </div>
  );
}
