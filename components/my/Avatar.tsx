import Image from "next/image";

// Ukuran yang tersedia
const sizeMap = {
  sm: { box: 32, text: "text-xs", ring: 2, dot: 10 },
  md: { box: 48, text: "text-sm", ring: 2, dot: 12 },
  lg: { box: 80, text: "text-xl", ring: 3, dot: 14 },
  xl: { box: 120, text: "text-3xl", ring: 3, dot: 18 },
  "2xl": { box: 160, text: "text-5xl", ring: 4, dot: 22 },
};

type AvatarSize = keyof typeof sizeMap;

interface AvatarProps {
  // Sumber foto — kalau tidak ada, tampil inisial
  src?: string;
  // Nama lengkap — dipakai untuk inisial & alt text
  name: string;
  size?: AvatarSize;
  // Tambah ring hitam di sekeliling avatar
  ring?: boolean;
  // Tampilkan indikator online (titik hijau)
  online?: boolean;
  // Ganti bentuk jadi rounded square
  rounded?: boolean;
  className?: string;
}

// Ambil 2 huruf pertama dari nama
function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function Avatar({
  src,
  name,
  size = "lg",
  ring = false,
  online = false,
  rounded = false,
  className = "",
}: AvatarProps) {
  const { box, text, ring: ringWidth, dot: dotSize } = sizeMap[size];

  const shape = rounded ? "rounded-2xl" : "rounded-full";

  const ringClass = ring
    ? `ring-[${ringWidth}px] ring-[--black-primary]`
    : "border border-[--cream-border]";

  return (
    <div className={"relative inline-block "}>
      {/* Bulatan utama */}
      <div
        className={`
          ${shape} ${ringClass} ${className}
          bg-background overflow-hidden
          flex items-center justify-center
          shrink-0
        `}
        style={{ width: box, height: box }}
      >
        {src ? (
          <Image
            src={src}
            alt={name}
            width={box}
            height={box}
            className="object-cover w-full h-full"
          />
        ) : (
          // Fallback: tampilkan inisial kalau tidak ada foto
          <span className={`${text} font-medium text-foreground select-none`}>
            {getInitials(name)}
          </span>
        )}
      </div>

      {/* Indikator online */}
      {online && (
        <span
          className="absolute bottom-0 right-0 rounded-full bg-green-500 border-2 border-[--background]"
          style={{ width: dotSize, height: dotSize }}
        />
      )}
    </div>
  );
}
