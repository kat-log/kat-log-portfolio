function SimpleIcon({
  icon,
  className,
}: {
  icon: { svg: string }
  className?: string
}) {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
      style={{ fill: "currentColor" }}
    />
  )
}

export { SimpleIcon }
