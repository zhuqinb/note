export default function(resource) {
    for (let item of resource.values()) {
        item.run()
    }
}