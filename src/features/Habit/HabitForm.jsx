import Input from '@/components/ui/Input';
import React from 'react';
import Switch from '@/components/ui/CustomSwitch';
import FormControlLabel from '@mui/material/FormControlLabel';

const HabitForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar o formulário
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 items-end gap-y-8 gap-x-10"
    >
      <div className="flex items-end gap-2">
        <Input
          name="title"
          type="text"
          label="Hábito"
          placeholder="Ler um livro"
          required
          className="!mt-0 flex-1"
        />
        <Input
          name="emoji"
          type="text"
          placeholder="📚"
          required
          className="w-[60px] !mt-0"
        />
      </div>
      <div className="flex flex-col justify-end gap-2">
        <label className="text-base">Frequência</label>
        <div>
          <p className="text-sm text-[var(--grey-c3)]">
            Ative ou desative este hábito sem precisar excluí-lo.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-end gap-2 pb-4 border-b-2 border-b-[var(--grey-b3)] col-start-1 col-end-[-1]">
        <label className="text-base">Status</label>
        <div>
          <p className="text-sm text-[var(--grey-c3)]">
            Ative ou desative este hábito sem precisar excluí-lo.
          </p>
          <FormControlLabel control={<Switch />} label="" />
        </div>
      </div>
    </form>
  );
};

export default HabitForm;
