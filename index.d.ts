interface Tournament {
  imageUrl: string,
  title: string,
  endDate: string,
  type: string,
  prize: number,
  author: {
    avatar: string,
    name: string
  }
}

interface News {
  imageUrl: string,
  title: string,
  author: string,
  date: string
}

interface Article {
  imageUrl: string,
  title: string,
  date: string
}
