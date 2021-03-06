export interface IID {
  secondCategory: string
}
export interface IPageItem {
  alias: string
  title: string
  _id: string
  category: string
}

export interface IMenuItem {
  _id: IID
  pages: IPageItem[]
}
