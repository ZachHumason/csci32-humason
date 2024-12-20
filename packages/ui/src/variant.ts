export enum Variant {
  PRIMARY,
  SECONDARY,
  TERTIARY,
  ERROR,
  ALERT,
}

export function getVariantBackgroundStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white'
    case Variant.SECONDARY:
      return 'bg-fuchsia-600 hover:bg-fuchsia-700 active:bg-fuchsia-800 text-white'
    case Variant.TERTIARY:
      return 'bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white'
    case Variant.ERROR:
      return 'bg-red-600 hover:bg-red-700 active:bg-red-800'
    case Variant.ALERT:
      return 'bg-amber-600 hover:bg-amber-700 active:bg-amber-800'
  }
}

export function getVariantOutlineStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'outline-rose-600'
    case Variant.SECONDARY:
      return 'outline-fuchsia-600'
    case Variant.TERTIARY:
      return 'outline-amber-600'
    case Variant.ERROR:
      return 'bg-red-600 hover:bg-red-700 active:bg-red-800'
    case Variant.ALERT:
      return 'bg-amber-600 hover:bg-amber-700 active:bg-amber-800'
  }
}

export function getVariantBorderStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'border-2 border-rose-600'
    case Variant.SECONDARY:
      return 'border-2 border-fuchsia-600'
    case Variant.TERTIARY:
      return 'border-2 border-amber-600'
    case Variant.ERROR:
      return 'border-2 border-red-600'
    case Variant.ALERT:
      return 'border-2 border-amber-600'
  }
}

export function getVariantInputTextStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'text-black'
    case Variant.SECONDARY:
      return 'text-black'
    case Variant.TERTIARY:
      return 'text-black'
    case Variant.ERROR:
      return 'text-black'
    case Variant.ALERT:
      return 'text-black'
  }
}

export function getVariantButtonTextStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'text-white'
    case Variant.SECONDARY:
      return 'text-white'
    case Variant.TERTIARY:
      return 'text-white'
    case Variant.ERROR:
      return 'text-white'
    case Variant.ALERT:
      return 'text-white'
  }
}
