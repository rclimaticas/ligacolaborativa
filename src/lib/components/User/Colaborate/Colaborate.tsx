import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Divider } from '@mui/material';

const Colaborate: React.FC = () => {
  return (
    <>
      <h3>
        Esse espaço irá ajudar a direcionar da melhor forma as possibilidade de
        colaborar e receber colaboração. Atualize as informações sempre que
        necessário.
      </h3>

      <div className="grid items-center rounded-xl border-2 bg-white p-10 shadow-xl">
        {/* Organização/Coletivo */}
        <div className="hover:bg-black-100">
          <div className="flex w-full items-center justify-between py-4">
            <div className="font-bold opacity-50">Organização/Coletivo</div>
            <div className="w-[300px]">Led Zeppelin</div>
            <div>
              <DriveFileRenameOutlineIcon />
            </div>
          </div>
          <Divider />
        </div>

        {/* Disponibilidade */}
        <div className="hover:bg-black-100">
          <div className="flex w-full items-center justify-between py-4">
            <div className="font-bold opacity-50">Disponibilidade</div>
            <div className="w-[260px]">10 minutos</div>
            <div>
              <DriveFileRenameOutlineIcon />
            </div>
          </div>
          <Divider />
        </div>

        {/* Áreas de Interesse */}
        <div className="hover:bg-black-100">
          <div className="flex items-center justify-between py-4">
            <div className="font-bold opacity-50">Áreas de Interesse</div>
            <div className="flex max-w-[280px] flex-wrap gap-1">
              {[
                ['Social/Cultural/Econômia'],
                ['Ambiental/Territórios/Biodiversidade'],
                ['Tecnologia/Inovação/Desenvolvimento'],
              ].map(([tags]) => (
                <div className="w-auto rounded-lg border-2 bg-[#FFF0BC]">
                  <p className="px-2 text-sm font-bold text-black-300">
                    {tags}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <DriveFileRenameOutlineIcon />
            </div>
          </div>
          <Divider />
        </div>

        {/* Biomas */}
        <div className="hover:bg-black-100">
          <div className="flex w-full items-center justify-between py-4">
            <div className="font-bold opacity-50">Biomas</div>
            <div className="flex max-w-[200px] flex-wrap gap-1">
              {[['Mata Atlântica'], ['Caatinga'], ['Amazônia']].map(
                ([tags]) => (
                  <div className="rounded-lg border-2 bg-[#FFF0BC]">
                    <p className="px-2 text-sm font-bold text-black-300">
                      {tags}
                    </p>
                  </div>
                )
              )}
            </div>
            <div>
              <DriveFileRenameOutlineIcon />
            </div>
          </div>
          <Divider />
        </div>

        {/* Povos */}
        <div className="hover:bg-black-100">
          <div className="flex w-full items-center justify-between py-4">
            <div className="font-bold opacity-50">Povos</div>
            <div className="flex max-w-[190px] flex-wrap gap-1">
              {['Agricultor Familiar', 'Indígenas', 'Quilombolas'].map(
                (tag) => (
                  <div
                    key={tag}
                    className="inline-block rounded-lg border-2 bg-[#FFF0BC]"
                  >
                    <p className="px-2 text-sm font-bold text-black-300">
                      {tag}
                    </p>
                  </div>
                )
              )}
            </div>
            <div>
              <DriveFileRenameOutlineIcon />
            </div>
          </div>
          <Divider />
        </div>
      </div>
    </>
  );
};

export default Colaborate;
