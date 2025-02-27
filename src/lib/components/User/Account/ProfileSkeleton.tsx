/* eslint-disable react/button-has-type */
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Divider, Skeleton, useMediaQuery } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';

export default function AccountSkeleton() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className="flex flex-col items-center justify-between gap-10 rounded-full lg:flex-row">
      {/* Skeleton para a imagem de perfil */}
      <div className="rounded-full bg-black-100">
        <div className="bg-red-100 relative h-[300px]">
          <div className="group rounded-full">
            <button className="rounded-full">
              <Skeleton
                component="div"
                variant="circular"
                width={300}
                height={300}
                animation="wave"
              >
                <Avatar
                  alt="Remy Sharp"
                  sx={{ width: 300, height: 300 }}
                  src="./assets/johnbonham.webp"
                />
              </Skeleton>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full">
          {/* Skeleton para o Usuário */}
          <button className="w-full hover:bg-black-100">
            <div className="flex w-full items-center justify-between py-4">
              <div className="font-bold opacity-50">Usuário</div>
              <Skeleton width={isSmallScreen ? '120px' : '220px'}>
                <div>
                  <span className="opacity-70">@</span>drummerjohn
                </div>
              </Skeleton>
              <div>
                <DriveFileRenameOutlineIcon />
              </div>
            </div>
            <Divider />
          </button>

          {/* Skeleton para o Nome */}
          <button className="w-full hover:bg-black-100">
            <div className="flex w-full items-center justify-between py-4">
              <div className="font-bold opacity-50">Nome</div>
              <Skeleton width="200px">
                <div>username</div>
              </Skeleton>
              <div>
                <DriveFileRenameOutlineIcon />
              </div>
            </div>
            <Divider />
          </button>

          {/* Skeleton para o Email */}
          <button className="w-full hover:bg-black-100">
            <div className="flex w-full items-center justify-between py-4">
              <div className="font-bold opacity-50">Email</div>
              <Skeleton width="200px">
                <div>ledzeppelin@drummer.com</div>
              </Skeleton>
              <div>
                <DriveFileRenameOutlineIcon />
              </div>
            </div>
            <Divider />
          </button>

          {/* Skeleton para a Senha */}
          <button className="w-full hover:bg-black-100">
            <div className="flex w-full items-center justify-between py-4">
              <div className="font-bold opacity-50">Senha</div>
              <Skeleton width="200px">
                <div>****</div>
              </Skeleton>
              <div>
                <DriveFileRenameOutlineIcon />
              </div>
            </div>
            <Divider />
          </button>

          {/* Skeleton para a Cidade */}
          <button className="w-full hover:bg-black-100">
            <div className="flex w-full items-center justify-between py-4">
              <div className="font-bold opacity-50">Cidade</div>
              <Skeleton width="200px">
                <div>Londres</div>
              </Skeleton>
              <div>
                <DriveFileRenameOutlineIcon />
              </div>
            </div>
            <Divider />
          </button>

          {/* Skeleton para o Estado */}
          <div className="hover:bg-black-100">
            <div className="flex w-full items-center justify-between py-4">
              <div className="font-bold opacity-50">Estado</div>
              <Skeleton width="200px">
                <div>#######</div>
              </Skeleton>
              <div>
                <DriveFileRenameOutlineIcon />
              </div>
            </div>
            <Divider />
          </div>
        </div>
      </div>
    </div>
  );
}
