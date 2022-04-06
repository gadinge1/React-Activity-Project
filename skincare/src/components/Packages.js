export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage, i) => <li key={i}>{eachPackage}</li>)

    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Shop All Newly Curated</h1>
                </div>
                <ul>
                    {displayPackages}
                </ul>
            </div>
        </div>
    )
}