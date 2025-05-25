import "tailwindcss";

export default function ScanLayout() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-2">
        <div>ini gambar</div>
        <div className="grid grid-cols-2 gap-1 mt-2">
          <button className="bg-gray-300 rounded-sm">Ambil dari Galeri</button>
          <button className="bg-gray-300 rounded-sm">Buka Kamera</button>
          <button className="col-span-2 bg-gray-300 rounded-sm">Submit</button>
        </div>
      </div>
    </div>
  );
}
