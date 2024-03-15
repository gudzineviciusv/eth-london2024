program dao.aleo {
    struct ProposalInfo {
        title: field,
        content: field,
        proposer: address,
    }

    record Proposal {
        owner: address,
        id: field,
        info: ProposalInfo,
    }

    mapping proposals: field => ProposalInfo;

    record Ticket {
        owner: address,
        pid: field,
    }

    mapping tickets: field => u64;

    mapping agree_votes: field => u64;

    mapping disagree_votes: field => u64;

    transition propose(public info: ProposalInfo) -> Proposal {
        assert_eq(self.caller, info.proposer);

        let id: field = BHP256::hash_to_field(info.title);


        return Proposal {
            owner: self.caller,
            id,
            info,
        } then finalize(id);
    }

    finalize propose(public id: field) {
        Mapping::set(tickets, id, 0u64);
    }

    transition new_ticket(
        public pid: field,
        public voter: address,
    ) -> Ticket {

        return Ticket {
            owner: voter,
            pid,
        } then finalize(pid);
    }

    finalize new_ticket(public pid: field) {
        let current: u64 = Mapping::get_or_use(tickets, pid, 0u64);
        Mapping::set(tickets, pid, current + 1u64);
    }

    transition agree(ticket: Ticket) {
        return then finalize(ticket.pid);
    }

    finalize agree(public pid: field) {
        let current: u64 = Mapping::get_or_use(agree_votes, pid, 0u64);
        Mapping::set(agree_votes, pid, current + 1u64);
    }

    transition disagree(ticket: Ticket) {
        return then finalize(ticket.pid);
    }

    finalize disagree(pid: field) {
        let current: u64 = Mapping::get_or_use(disagree_votes, pid, 0u64);
        Mapping::set(disagree_votes, pid, current + 1u64);
    }
}
