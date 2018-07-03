<template>
    <v-flex>
        <v-card-title primary-title class="title">Events</v-card-title>
        <v-divider class="primary" />
        <v-card-text v-if="events.length < 1">No upcoming events for this artist.</v-card-text>

        <v-container fluid px-0 v-else grid-list-lg>
            <v-layout row wrap>
                <v-flex v-for="(event, index) in events" :key="index" xs12 sm4>
                    <v-card>
                        <v-card-title>
                            <div>
                                <div class="title">{{ event.venue.name }}</div>
                                <div class="text--secondary--lighten-2">{{ event.venue.city }}, {{ event.venue.region }}</div>
                                <div class="text--secondary--lighten-2">{{ event.venue.country }}</div>
                                <div class="text--secondary--lighten-2">{{ new Date(event.datetime).toDateString() }}</div>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat small color="primary" :href="event.url" target="_blank">Info</v-btn>
                            <v-btn flat small color="secondary" v-for="(ticket, index) in event.offers" :key="index" :href="ticket.url" target="_blank">Tickets</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-flex>
</template>

<script>
    export default {
      props: ["events"]
    };
</script>

<style>
</style>
