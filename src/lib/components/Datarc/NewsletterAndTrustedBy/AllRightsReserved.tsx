export const AllRightsReserved = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-10 w-full items-center justify-center p-5 lg:p-20">
      <div className="text-center">
        @Liga Colaborativa - {currentYear} Todos os direitos reservados
      </div>
    </div>
  );
};
