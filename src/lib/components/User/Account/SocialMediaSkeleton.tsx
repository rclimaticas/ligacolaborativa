/* eslint-disable react/button-has-type */
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Divider, Skeleton, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function AccountSkeleton() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className="flex items-center justify-between gap-10 rounded-full">
      <div className="w-full">
        <button className="w-full hover:bg-black-100">
          <div className="flex w-full items-center justify-between py-4">
            <div className="font-bold opacity-50">Whatsapp</div>
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

        <button className="w-full hover:bg-black-100">
          <div className="flex w-full items-center justify-between py-4">
            <div className="font-bold opacity-50">Instagram</div>
            <Skeleton width="200px">
              <div>username</div>
            </Skeleton>
            <div>
              <DriveFileRenameOutlineIcon />
            </div>
          </div>
          <Divider />
        </button>

        <button className="w-full hover:bg-black-100">
          <div className="flex w-full items-center justify-between py-4">
            <div className="font-bold opacity-50">Facebook</div>
            <Skeleton width="200px">
              <div>ledzeppelin@drummer.com</div>
            </Skeleton>
            <div>
              <DriveFileRenameOutlineIcon />
            </div>
          </div>
          <Divider />
        </button>

        <button className="w-full hover:bg-black-100">
          <div className="flex w-full items-center justify-between py-4">
            <div className="font-bold opacity-50">Twitter</div>
            <Skeleton width="200px">
              <div>****</div>
            </Skeleton>
            <div>
              <DriveFileRenameOutlineIcon />
            </div>
          </div>
          <Divider />
        </button>

        <button className="w-full hover:bg-black-100">
          <div className="flex w-full items-center justify-between py-4">
            <div className="font-bold opacity-50">Linkedin</div>
            <Skeleton width="200px">
              <div>Londres</div>
            </Skeleton>
            <div>
              <DriveFileRenameOutlineIcon />
            </div>
          </div>
          <Divider />
        </button>
      </div>
    </div>
  );
}
