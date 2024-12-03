/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import AddAPhotoSharpIcon from '@mui/icons-material/AddAPhotoSharp';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import type React from 'react';

const Account: React.FC = () => {
  return (
    <div>
      <div className="grid items-center gap-10 rounded-xl border-2 bg-white p-10 shadow-xl">
        <div>
          <h3 className="">Informações Básicas</h3>
        </div>
        <div className="flex items-center justify-between gap-10 rounded-full">
          <div className="rounded-full bg-black-100">
            <div className="bg-red-100 relative h-[300px]">
              <div className="group rounded-full">
                <button className="rounded-full">
                  <Avatar
                    className="transition duration-300 group-hover:blur-sm"
                    alt="Remy Sharp"
                    sx={{ width: 300, height: 300 }}
                  />
                  <div className="absolute inset-0 z-10 flex items-center justify-center rounded-full text-6xl font-semibold text-white opacity-0 duration-300 group-hover:opacity-100">
                    <AddAPhotoSharpIcon
                      sx={{ fontSize: 90, color: '#000100' }}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full">
            {/* Nome */}
            <div className="hover:bg-black-100">
              <div className="flex w-full items-center justify-between py-4">
                <div className="font-bold opacity-50">Nome</div>
                <div className="w-[200px]">John Bonham</div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </div>

            {/* Email */}
            <div className="hover:bg-black-100">
              <div className="flex w-full items-center justify-between py-4">
                <div className="font-bold opacity-50">Email</div>
                <div className="w-[200px]">ledzeppelin@drummer.com</div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </div>

            {/* Senha */}
            <div className="hover:bg-black-100">
              <div className="flex w-full items-center justify-between py-4">
                <div className="font-bold opacity-50">Senha</div>
                <div className="w-[200px]">****</div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
