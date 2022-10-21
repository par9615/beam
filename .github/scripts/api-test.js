const print = ({message}) => { console.log(message) }

const getWorkflows = async ({github, context}) => {
    const { data } = await github.rest.actions.listRepoWorkflows({
        owner: context.repo.owner,
        repo: context.repo.repo
    })

    console.log(data)

}

module.exports = { print, getWorkflows }