import { Dimensions, Platform } from 'react-native'
import { Edge } from 'react-native-safe-area-context'
import { QueryClient } from '@tanstack/react-query'
import { IconComponentProps } from '../components/icon/type'
import dayjs from 'dayjs'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      networkMode: 'online',
      retry: false,
      refetchOnMount: true,
      refetchOnReconnect: true
    },
    mutations: {
      networkMode: 'online'
    }
  }
})
export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } =
  Dimensions.get('screen')

export enum UserRole {
  REQUEST = 0,
  MANAGER = 1,
  MEMBER = 2,
  PARTNEROWNER = 3,
  PARTNERMANAGER = 4,
  PARTNERMEMBER = 5,
  GUEST = 6,
  HR = 7
}

export const EDGES: Record<
  'LEFT' | 'RIGHT' | 'LEFT_RIGHT' | 'TOP_BOTTOM' | 'FULL' | 'LEFT_RIGHT_BOTTOM',
  Edge[]
> = {
  LEFT: ['left'],
  RIGHT: ['right'],
  LEFT_RIGHT: ['left', 'right'],
  LEFT_RIGHT_BOTTOM: ['left', 'right', 'bottom'],
  FULL: ['left', 'right', 'top', 'bottom'],
  TOP_BOTTOM: ['top', 'bottom']
}
export const Helper = {
  isIOS: () => {
    return Platform.OS === 'ios'
  },
  isAndroid: () => {
    return Platform.OS === 'android'
  },
  isString(x: unknown): x is string {
    return typeof x === 'string'
  },
  isIcon(
    icon: IconComponentProps | React.ReactNode
  ): icon is IconComponentProps {
    return (icon as IconComponentProps)?.name !== undefined
  },

  isStartWithChar: (x: string) => {
    if (!x) return x
    if (x.includes('none')) return 0
    return x.startsWith('_') ? Number(x.replace('_', '')) : x
  },

  getKeyExtractor: (item: unknown, index: number): string => {
    return `${item}-${index}`
  },

  formatSecondsToMinutes: (seconds: number) => {
    if (seconds < 0) return '00:00'
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(remainingSeconds).padStart(2, '0')

    return `${formattedMinutes}:${formattedSeconds}`
  },
  formatDecimaltoHoursAndMinutes: (
    decimalHours: number,
    hasSuffix: boolean
  ) => {
    const hours = Math.floor(decimalHours)
    const minutes = Math.round((decimalHours - hours) * 60)
      .toString()
      .padStart(2, '0')

    if (hasSuffix) {
      return hours > 0 ? `${hours} giờ ${minutes} phút` : `${minutes} phút`
    }
    return `${hours.toString().padStart(2, '0')}:${minutes}`
  },

  getDecimalTimeFromEightAm: (time: string = dayjs().toISOString()) => {
    const date = dayjs(time)
    const eightAM = date.startOf('day').add(8, 'hour')
    const diffInMinutes = date.diff(eightAM, 'minute')
    const hours = Math.floor(diffInMinutes / 60)
    const minutes = diffInMinutes % 60
    return hours + minutes / 60
  },
  getDecimalTimeFromMidnight: (time: string) => {
    if (!time) {
      return -10
    }
    const date = dayjs(time)
    const diffInHours = date.diff(date.startOf('day'), 'minute') / 60
    return diffInHours
  },

  formatMinutesToHoursAndMinutes: (totalMinutes: number) => {
    const hours = Math.floor(totalMinutes / 60)
    const hoursFormat = hours.toString().padStart(2, '0')
    const minutes = totalMinutes % 60
    const minutesFormat = minutes.toString().padStart(2, '0')
    return `${hoursFormat}:${minutesFormat}`
  },
  getTotalHoursWorkOut: (timeCheckIn: string) => {
    return dayjs(new Date()).diff(dayjs(timeCheckIn), 'minute')
  },
  isNetworkError(e: unknown) {
    const str = String(e)
    return (
      str.includes('Abort') ||
      str.includes('Network request failed') ||
      str.includes('Failed to fetch') ||
      str.includes('Network Error') ||
      str.includes('timeout exceeded')
    )
  },
  isServerError(e: unknown) {
    const str = String(e)
    return (
      str.includes('Request failed with status code 502') ||
      str.includes('Request failed with status code 500')
    )
  },
  format_YY_MM_DD: (date: Date) => {
    return dayjs(date).format('YYYY-MM-DD')
  },
  format_DD_MM_YY: (date: Date) => {
    return dayjs(date).format('DD/MM/YYYY')
  },
  format_HH_mm_ss: (time: any) => {
    return time ? dayjs(time).format('HH:mm:ss') : '-'
  },
  format_HH_mm: (time: any) => {
    return dayjs(time).format('HH:mm')
  },
  startMonth: () => {
    return dayjs().startOf('month').toDate()
  },
  endtMonth: () => {
    return dayjs().endOf('month').toDate()
  },
  hasDateValue: (date: string) => {
    if (!date) return null
    return dayjs(date).toDate()
  },
  format_MM_YY_to_string: (monthYear: string) => {
    const [month, year] = monthYear.split('-')
    return `Tháng ${month} /${year}`
  },
  isToday: (date: Date) => {
    return dayjs(date).diff(dayjs(new Date()), 'day') === 0
  }
}