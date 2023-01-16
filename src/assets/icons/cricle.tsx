type Props = {
    radius: any
}

function SVGCircle(props: Props) {
    const {radius} = props
    return (
        <svg className="countdown-svg">
            <path
                fill="none"
                stroke="#333"
                strokeWidth="4"
            />
        </svg>
    )

}
;

export default SVGCircle