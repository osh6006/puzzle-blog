interface IPostListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => JSX.Element;
}

const PostList = <T,>({ items, renderItem }: IPostListProps<T>) => {
  return items.map((item, index) => renderItem(item, index));
};

export default PostList;
