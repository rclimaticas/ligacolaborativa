/* eslint-disable import/extensions */
import Doodle from '@/lib/components/OndeFoi/About/Doodle';
import Title from '@/lib/components/OndeFoi/About/Title';

export default function About() {
  return (
    <div className="flex items-center justify-center bg-opacity-25">
      <div className="flex h-full max-w-[1500px] flex-col p-4 lg:flex-row lg:p-32">
        <Doodle />
        <Title />
      </div>
      {/* <a download="test.png" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC">Download</a> */}
    </div>
  );
}
