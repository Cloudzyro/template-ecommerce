import type { ArtKind } from "@/data/products";

type Props = {
  kind: ArtKind;
  color: string;
  background: [string, string];
  id: string;
  label: string;
  className?: string;
};

// The main silhouette of each object, drawn with a given fill. It's drawn
// twice: once in the product color and once with a soft light-to-shade overlay.
function Body({ kind, fill }: { kind: ArtKind; fill: string }) {
  switch (kind) {
    case "vase":
      return (
        <path
          fill={fill}
          d="M178 150 L222 150 L222 176 C222 194 288 214 292 300 C296 382 258 420 200 420 C142 420 104 382 108 300 C112 214 178 194 178 176 Z"
        />
      );
    case "mug":
      return <rect fill={fill} x="112" y="228" width="160" height="192" rx="20" />;
    case "bowl":
      return <path fill={fill} d="M66 300 C74 408 326 408 334 300 Z" />;
    case "plates":
      return (
        <g fill={fill}>
          {[0, 1, 2, 3].map((i) => (
            <ellipse key={i} cx="200" cy={404 - i * 18} rx="152" ry="38" />
          ))}
        </g>
      );
    case "throw":
      return <rect fill={fill} x="78" y="236" width="244" height="184" rx="16" />;
    case "pillow":
      return (
        <path
          fill={fill}
          d="M96 226 Q200 206 304 226 Q326 324 304 420 Q200 440 96 420 Q74 324 96 226 Z"
        />
      );
    case "candle":
      return <rect fill={fill} x="126" y="262" width="148" height="158" rx="18" />;
    case "tote":
      return <path fill={fill} d="M108 248 L292 248 L308 420 L92 420 Z" />;
    case "carafe":
      return (
        <path
          fill={fill}
          d="M172 188 L228 188 L232 232 C292 262 302 334 292 382 C284 416 250 420 200 420 C150 420 116 416 108 382 C98 334 108 262 168 232 Z"
        />
      );
  }
}

function Details({ kind, color, id }: { kind: ArtKind; color: string; id: string }) {
  const shade = "rgba(20,16,12,0.22)";
  const deep = "rgba(20,16,12,0.38)";
  const light = "rgba(255,255,255,0.35)";
  const clay = "#d9c3a1";
  switch (kind) {
    case "vase":
      return (
        <g>
          <ellipse cx="200" cy="151" rx="22" ry="6" fill={deep} />
          <path d="M126 268 C160 236 240 236 274 268 C250 258 150 258 126 268 Z" fill={shade} />
          <path d="M146 410 C168 420 232 420 254 410 L250 420 L150 420 Z" fill={clay} />
        </g>
      );
    case "mug":
      return (
        <g>
          <path
            d="M272 268 C336 268 336 380 272 380"
            fill="none"
            stroke={color}
            strokeWidth="24"
            strokeLinecap="round"
          />
          <path
            d="M272 268 C336 268 336 380 272 380"
            fill="none"
            stroke={shade}
            strokeWidth="24"
            strokeLinecap="round"
          />
          <ellipse cx="192" cy="230" rx="80" ry="13" fill={deep} />
          <rect x="112" y="398" width="160" height="22" rx="6" fill={clay} />
          <path d="M120 236 L120 396" stroke={light} strokeWidth="10" strokeLinecap="round" />
        </g>
      );
    case "bowl":
      return (
        <g>
          <ellipse cx="200" cy="300" rx="134" ry="30" fill={color} />
          <ellipse cx="200" cy="302" rx="120" ry="23" fill={deep} />
          <path d="M150 393 C180 402 220 402 250 393 L246 404 L154 404 Z" fill={clay} />
        </g>
      );
    case "plates":
      return (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <ellipse
              key={i}
              cx="200"
              cy={404 - i * 18}
              rx="152"
              ry="38"
              fill="none"
              stroke={shade}
              strokeWidth="2"
            />
          ))}
          <ellipse cx="200" cy="350" rx="108" ry="25" fill={shade} />
          <ellipse cx="200" cy="347" rx="102" ry="22" fill={color} />
        </g>
      );
    case "throw":
      return (
        <g>
          <clipPath id={`${id}-clip`}>
            <rect x="78" y="236" width="244" height="184" rx="16" />
          </clipPath>
          <g clipPath={`url(#${id}-clip)`}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <rect key={i} x={92 + i * 30} y="236" width="8" height="184" fill={shade} />
            ))}
            <rect x="78" y="300" width="244" height="14" fill="rgba(255,255,255,0.28)" />
            <rect x="78" y="236" width="244" height="40" fill={deep} opacity="0.5" />
          </g>
          {Array.from({ length: 23 }, (_, i) => (
            <line
              key={i}
              x1={90 + i * 10}
              y1="420"
              x2={90 + i * 10}
              y2="436"
              stroke={color}
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}
        </g>
      );
    case "pillow":
      return (
        <g>
          <path
            d="M118 246 Q200 230 282 246 Q300 324 282 402 Q200 418 118 402 Q100 324 118 246 Z"
            fill="none"
            stroke={shade}
            strokeWidth="3"
            strokeDasharray="7 7"
          />
          <path d="M150 290 Q200 330 250 296" fill="none" stroke={light} strokeWidth="6" strokeLinecap="round" />
          <circle cx="200" cy="324" r="7" fill={deep} />
        </g>
      );
    case "candle":
      return (
        <g>
          <ellipse cx="200" cy="264" rx="66" ry="12" fill="#f4ecda" />
          <ellipse cx="200" cy="266" rx="58" ry="8" fill="#e8dcc0" />
          <line x1="200" y1="264" x2="200" y2="244" stroke="#2b2420" strokeWidth="3" />
          <path d="M200 196 C214 216 214 236 200 244 C186 236 186 216 200 196 Z" fill={`url(#${id}-flame)`} />
          <rect x="126" y="400" width="148" height="20" rx="6" fill={clay} />
          <rect x="160" y="320" width="80" height="44" rx="4" fill="#f4ecda" opacity="0.9" />
          <line x1="174" y1="336" x2="226" y2="336" stroke="#2b2420" strokeWidth="3" opacity="0.6" />
          <line x1="180" y1="348" x2="220" y2="348" stroke="#2b2420" strokeWidth="2" opacity="0.4" />
        </g>
      );
    case "tote":
      return (
        <g>
          <rect x="158" y="300" width="84" height="64" rx="4" fill={shade} />
          <line x1="108" y1="262" x2="292" y2="262" stroke={shade} strokeWidth="3" strokeDasharray="6 6" />
        </g>
      );
    case "carafe":
      return (
        <g>
          <path d="M166 192 L234 192 L226 128 L174 128 Z" fill={color} />
          <path d="M166 192 L234 192 L226 128 L174 128 Z" fill={`url(#${id}-shade)`} />
          <ellipse cx="200" cy="192" rx="34" ry="6" fill={deep} />
          <path d="M150 412 C170 420 230 420 250 412 L246 420 L154 420 Z" fill={clay} />
        </g>
      );
  }
}

// Behind the handles of the tote, so they read as going over the bag.
function Behind({ kind, color }: { kind: ArtKind; color: string }) {
  if (kind !== "tote") return null;
  return (
    <path
      d="M146 252 C146 132 254 132 254 252"
      fill="none"
      stroke={color}
      strokeWidth="14"
      strokeLinecap="round"
    />
  );
}

export default function ProductArt({ kind, color, background, id, label, className }: Props) {
  return (
    <svg
      viewBox="0 0 400 500"
      role={label ? "img" : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor={background[0]} />
          <stop offset="1" stopColor={background[1]} />
        </linearGradient>
        <linearGradient id={`${id}-shade`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0.22" />
          <stop offset="0.45" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.22" />
        </linearGradient>
        <radialGradient id={`${id}-flame`} cx="0.5" cy="0.7" r="0.6">
          <stop offset="0" stopColor="#fff4c2" />
          <stop offset="0.6" stopColor="#f4a73b" />
          <stop offset="1" stopColor="#d9622b" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#${id}-bg)`} />
      <rect y="420" width="400" height="80" fill="#000" opacity="0.05" />
      <ellipse cx="200" cy="424" rx="150" ry="14" fill="#000" opacity="0.12" />
      <Behind kind={kind} color={color} />
      <Body kind={kind} fill={color} />
      <Body kind={kind} fill={`url(#${id}-shade)`} />
      <Details kind={kind} color={color} id={id} />
    </svg>
  );
}
