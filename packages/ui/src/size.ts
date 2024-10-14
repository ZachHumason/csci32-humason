export enum Size {
  SMALL,
  MEDIUM,
  LARGE,
}

export function getSizeStyles(size: Size) {
  switch (size) {
    case Size.SMALL:
      return 'px-4 py-1.5 rounded shadow'
    case Size.MEDIUM:
      return 'px-6 py-2 rounded-md shadow-md'
    case Size.LARGE:
      return 'px-8 py-2.5 rounded-lg shadow-lg'
  }
}

export function getInputSizeStyles(size: Size) {
  switch (size) {
    case Size.SMALL:
      return 'px-4 py-1.5 rounded shadow'
    case Size.MEDIUM:
      return 'px-6 py-2 rounded-md shadow-md'
    case Size.LARGE:
      return 'px-8 py-2.5 rounded-lg shadow-lg'
  }
}