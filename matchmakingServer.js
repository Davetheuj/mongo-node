class MatchMakingServer {
    constructor() {
      this.clusters  = [];
      clusters[0].users = [];
      clusters[1].users = [];
      clusters[2].users = [];
      clusters[3].users = [];
      clusters[4].users = [];
    }

        AddUserToCluster(mmr, username) {
        if(mmr > 2200){
            clusters[0].users.push({username:username, mmr:mmr});
        }
        else if( mmr > 1800){
            clusters[1].users.push({username:username, mmr:mmr});
        }
        else if( mmr > 1400){
            clusters[2].users.push({username:username, mmr:mmr});
        }
        else if( mmr > 1000){
            clusters[3].users.push({username:username, mmr:mmr});
        }
        else{
            clusters[4].users.push({username:username, mmr:mmr});
        }

        console.log("Added " + username + " to a cluster!");
        clusters.forEach(cluster => {
            console.log(cluster);
            cluster.forEach(user => {
                console.log(user.username.value + " - " + user.mmr.value);
            })
        });
    }
}