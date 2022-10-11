export interface ResultOnly <data> {
  data: data
  status: number
}

export interface ResultOnlyError {
  status: number
  data: null
}

export interface Results <data> {
  found: number
  results: data[]
  status: number
}

export interface ResultsError {
  status: number
  found: null
  results: null
}
