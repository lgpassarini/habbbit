import Button from '@/components/ui/Button';
import React from 'react';
import useHabit from '@/hooks/habit/useHabit';
import { FaPlus } from 'react-icons/fa6';
import { FiEdit } from 'react-icons/fi';
import Modal from '@/components/ui/Modal';
import HabitForm from './HabitForm';

const UserHabits = () => {
  const { userHabits, getUserHabits } = useHabit();
  const [createModal, setCreateModal] = React.useState(false);

  React.useEffect(() => {
    getUserHabits();
  }, []);

  return (
    <>
      {createModal && (
        <Modal
          title="Novo Hábito"
          acceptButtonLabel="Criar"
          cancelButtonLabel="Cancelar"
          setModal={setCreateModal}
        >
          <HabitForm />
        </Modal>
      )}
      <div className="h-full flex flex-col">
        <div className="p-[30px] flex-1 flex flex-col min-h-0">
          {userHabits.length > 0 ? (
            <>
              <h3 className="text-lg font-semibold mb-4">Meus Hábitos</h3>
              <ul className="flex-1 overflow-y-auto pr-4 flex flex-col gap-2">
                {userHabits.map((habit) => (
                  <li
                    key={habit.id}
                    className="w-full py-4 px-4 flex items-center justify-between gap-2 border border-[var(--blue-border)] rounded-xl"
                  >
                    <div className="flex items-center gap-2 text-lg min-w-0">
                      <span>{habit.emoji}</span>
                      <span className="truncate">{habit.title}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-sm ${habit.enabled ? 'bg-[var(--green-active)] text-[var(--green-active-text)]' : 'bg-[var(--red-inactive)] text-[var(--red-inactive-text)]'}  rounded-xl px-2`}
                      >
                        {habit.enabled ? 'ativo' : 'inativo'}
                      </span>
                      <FiEdit
                        className="text-lg mb-[2px] cursor-pointer"
                        style={{ stroke: 'var(--blue-scrollbar)' }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="h-full bg-[var(--grey-b1)] rounded-xl flex flex-col items-center justify-center gap-4">
              <span className="text-[var(--grey-c3)]">
                Você ainda não possui nenhum hábito.
              </span>
            </div>
          )}
        </div>
        <Button
          className="w-full rounded-t-none"
          onClick={() => setCreateModal(true)}
        >
          <span className="flex items-center justify-center text-white gap-2">
            <FaPlus fill="white" className="mb-[2px]" /> Novo Hábito
          </span>
        </Button>
      </div>
    </>
  );
};

export default UserHabits;
