export interface Task {
  id: string
  title: string
  dueDate: string
  completed: boolean
  missed?: boolean
  reflection?: string
  reflectionDate?: string
  createdAt: string
}